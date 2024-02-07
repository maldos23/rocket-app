"use client";
import { useState } from "react";
import createCache from "@emotion/cache";
import CssBaseline from "@mui/joy/CssBaseline";
import { CacheProvider } from "@emotion/react";
import { CssVarsProvider } from "@mui/joy/styles";
import { useServerInsertedHTML } from "next/navigation";
import { theme } from "./theme";

/**
 * ThemeRegistry component to manage and apply styles using Emotion and MUI.
 *
 * @param {Object} props - Component props.
 * @param {Object} props.options - Options for creating the Emotion cache.
 * @param {React.ReactNode} props.children - Child components to be styled.
 * @returns {React.ReactNode} - Styled component with theme registry.
 */
export default function ThemeRegistry(props) {
  const { options, children } = props;

  /**
   * State for managing Emotion cache and flush function.
   * @type {Object}
   * @property {Object} cache - Emotion cache instance.
   * @property {Function} flush - Function to flush the cache.
   */
  const [{ cache, flush }] = useState(() => {
    //  Constants
    let inserted = [];
    const cache = { ...createCache(options), compat: true };
    const prevInsert = cache.insert;

    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized?.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };

    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };

    return { cache, flush };
  });

  /**
   * Hook to handle server-inserted HTML and update styles accordingly.
   */
  useServerInsertedHTML(() => {
    let styles = "";
    const names = flush();

    if (names.length === 0) {
      return null;
    }

    for (const name of names) {
      styles += cache.inserted[name];
    }
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(" ")}`}
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <CssVarsProvider theme={theme}>
        <CssBaseline />
        {children}
      </CssVarsProvider>
    </CacheProvider>
  );
}
