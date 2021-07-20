import styled from '@emotion/styled'
function css(props) {
    const { m, p, h, w, fs, ls, c, d, jc, bg, br, b, t, ai, ff, ta, pos, ow, fw } = props
    var css = ""
    if(m) {css += `margin: ${m};`}
    if(p) {css += `padding: ${p};`}
    if(h) {css += `height: ${h};`}
    if(w) {css += `width: ${w};`}
    if(fs) {css += `font-size: ${fs};`}
    if(fw) {css += `font-weight: ${fw};`}
    if(ls) {css +=  `letter-spacing: ${ls};`}
    if(c) { css += `color: ${c};`}
    if(d) { css += `display: ${d};`}
    if(jc) { css += `justify-content: ${jc};`}
    if(bg) { css += `background: ${bg};`}
    if(br) { css += `border-radius: ${br};`}
    if(b) { css += `border: ${b};`}
    if(t) {css += `transition: ${t};`}
    if(ff) {css += `flex-flow: ${ff};`}
    if(ai) {css += `align-items: ${ai};`}
    if(ta) {css += `text-align: ${ta};`}
    if(pos) {css += `position: ${pos};`}
    if(ow) {css += `overflow-wrap: ${ow};`}
    return css
}
let Div = styled.div`
    ${css}
`

let Text = styled.h1`
    ${css}
`

let Input = styled.input`
    outline: none;
    border: none;
    border-left: 3px solid transparent; 
    ${css}
    @media (max-width: 600px) {
        width: 80%;
    }
    &:focus {
        ${props => props._hover ? props._hover : ""};
        border-left: 4px solid #5865F2; 
    }
    &::placeholder {
        color: #72767D;
    }
`
let Blue = styled.button `
    width: 50vw;
    outline: none;
    border: none;
    padding: 10px;
    margin: 70px 0;
    font-size: 30px;
    border-radius: 15px;
    background: #5865f2;
    color: white;
    font-family: 'Prompt', sans-serif;
    cursor: pointer;
    font-weight: 400;
    letter-spacing: 1px;
    transition: 0.4s all ease;
    &:hover {
        background: #4e5bf2;
    }
`

export { Div, Text, Input, Blue} 
