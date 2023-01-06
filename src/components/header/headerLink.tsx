import {link} from '../../models'

export function HeaderLink(props: link){
  return <a href={props.linkUrl} className="text-[15px]">{props.linkText}</a>
}