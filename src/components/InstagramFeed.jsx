// Live Instagram feed for a given account.
//
// Why not react-instagram-embed: that package is abandoned (last publish 2020,
// targets React 17) and relies on Instagram's public oEmbed endpoint, which now
// requires a Facebook-app access token — a bare <InstagramEmbed url="..."> will
// not render and cannot "update automatically".
//
// This component instead fetches the account's public RSS via RSS Bridge
// (https://rss-bridge.org — no API token required) and renders the latest posts
// as cards that link back to each Instagram post. Because it fetches on mount,
// the feed always reflects the latest posts.
import { useEffect, useState } from "react";

const RSS_BRIDGE = "/ig-feed/bridge/?action=display&bridge=Instagram&context=username&username=";

export default function InstagramFeed({ username }) {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const url = `${RSS_BRIDGE}${encodeURIComponent(username)}&limit=6`;

    async function load() {
      try {
        const response = await fetch(url);
        const text = await response.text();
        const doc = new DOMParser().parseFromString(text, "text/xml");

        const items = Array.from(doc.querySelectorAll("item")).map((item) => {
          const content = item.querySelector("description")?.textContent ?? "";
          const imgMatch = content.match(/<img[^>]+src="([^"]+)"/i);
          const link = item.querySelector("link")?.textContent ?? "";
          const title = item.querySelector("title")?.textContent ?? "";
          const pubDate = item.querySelector("pubDate")?.textContent ?? "";

          return {
            id: link || title,
            image: imgMatch ? imgMatch[1] : null,
            link,
            caption: title,
            date: pubDate,
          };
        });

        setPosts(items);
        setStatus(items.length ? "ready" : "empty");
      } catch (error) {
        console.error("Instagram feed failed to load:", error);
        setStatus("error");
      }
    }

    load();
  }, [username]);

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-display text-3xl font-bold text-toro-espresso">@ {username}</h2>
        <a
          href={`https://instagram.com/${username}`}
          target="_blank"
          rel="noreferrer noopener"
          className="rounded-full border border-toro-brown px-4 py-2 text-sm font-semibold text-toro-brown hover:bg-toro-brown hover:text-toro-cream"
        >
          Follow on Instagram
        </a>
      </div>

      {status === "loading" && (
        <p className="text-toro-brown">Loading latest posts…</p>
      )}
      {status === "error" && (
        <p className="text-toro-brown">
          Couldn&apos;t load the live feed right now.{" "}
          <a
            href={`https://instagram.com/${username}`}
            target="_blank"
            rel="noreferrer noopener"
            className="text-toro-clay underline"
          >
            View on Instagram
          </a>
        </p>
      )}
      {status === "empty" && (
        <p className="text-toro-brown">No recent posts found.</p>
      )}

      {status === "ready" && (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noreferrer noopener"
              className="group block overflow-hidden rounded-toro border border-toro-sand bg-white"
            >
              {post.image ? (
                <div className="aspect-square overflow-hidden bg-toro-sand">
                  <img
                    src={post.image}
                    alt={post.caption || `@${username} post`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="aspect-square bg-toro-sand" />
              )}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
