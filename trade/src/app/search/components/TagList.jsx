// components/TagList.jsx
const TagList = ({ items }) => (
    <div className="flex flex-wrap gap-2">
      {items.map((term, index) => (
        <button
          key={index}
          className="px-4 py-2 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition-colors"
        >
          {term}
        </button>
      ))}
    </div>
  );

  export default TagList