export const Button = (props) => {
  return (
  <div className="styled-button anime-button" onClick={()=>props.onClick()}>
    <span>{props.text}{props.icon}</span>
    <div id="underline"/>
  </div>)
}