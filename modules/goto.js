export default function goto(path){
    return new CustomEvent('onstatechange', {detail : {path : path}});
}