export const Button = (props) => {
  return (
  <div className="styled-button anime-button" onClick={()=>props.onClick()}>
    <span children={props.text}></span>
    <div id="underline"/>
  </div>)
}