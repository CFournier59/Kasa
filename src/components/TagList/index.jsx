import '../../styles/TagList.scss'
/**
 * TagList component to display tags
 * @param {array} tags list of tags to display from the housing object
 * @returns {JSX.Element} TagList component
 */
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
