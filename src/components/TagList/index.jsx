import '../../styles/TagList.scss'

export default function TagList({ tags }) {
   return (
      <div className="tag-list">
         {tags.map((tag) => (
            <span className="tag-list__tag" key={tag}>
               {tag}
            </span>
         ))}
      </div>
   )
}
