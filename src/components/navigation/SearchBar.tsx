import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { CommandDialog } from "@/components/ui/command-dialog";

export function SearchBar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const { data: searchResults, isLoading } = useQuery({
    queryKey: ['search', query],
    queryFn: async () => {
      if (!query) return [];
      const { data } = await supabase
        .from('blogs')
        .select('id, title, category, created_at, slug')
        .ilike('title', `%${query}%`)
        .limit(5);
      return data || [];
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="input"
        />
        {isLoading && <div>Loading...</div>}
        {searchResults && searchResults.length > 0 && (
          <ul>
            {searchResults.map((result) => (
              <li key={result.id}>
                <a href={`/blogs/${result.slug}`}>{result.title}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </CommandDialog>
  );
}
