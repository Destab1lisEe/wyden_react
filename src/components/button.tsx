import {link} from '../models'

export function Button(props: link){
  return <a href={props.linkUrl} className="button">{props.linkText}</a>
}