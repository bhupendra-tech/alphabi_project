"use client";
import { fetchGif } from "@/app/lib/data";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import styles from "@/app/ui/dashboard/dashboard.module.css";
import GifWrapper from "./GifWrapper";
export default function Search() {
  const [query, setQuery] = useState();
  const [items, setItems] = useState();
  const fetchData = async () => {
    const response = await fetchGif(query);
    const data = await response.json();
    setItems(data);
    console.log(data);
  };
  const handleSearch = (term) => {
    setQuery(term);
    fetchData();
    console.log(`Searching... ${term}`);
  };
  return (
    <div id={styles.centerContainer}>
      <input
        type="text"
        placeholder="Premier league Gif"
        onChange={(e) => handleSearch(e.target.value)}
        id={styles.inputBox}
      />
      {query ? <GifWrapper items = {items}/> : <h2>Search Something</h2>}
    </div>
  );
}
