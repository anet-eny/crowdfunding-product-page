import { useState } from "react";
import BookmarkIcon from "./icons/BookmarkIcon";

export default function BookmarkButton() {
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <button
      onClick={() => setBookmarked((prev) => !prev)}
      className={`flex items-center gap-3 sm:pr-4 rounded-full transition-colors duration-300 ${
        bookmarked ? "bg-teal-50 text-teal-700" : "bg-gray-200 text-gray-700"
      }`}
    >
      <div className="">
        <BookmarkIcon variant={bookmarked ? "active" : "inactive"} />
      </div>
      <span
        className={`hidden sm:inline-block text-preset-6 font-bold ${
          bookmarked ? "text-teal-800" : "text-gray-500"
        }`}
      >
        {bookmarked ? "Bookmarked" : "Bookmark"}
      </span>
    </button>
  );
}
