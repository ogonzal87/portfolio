import React from 'react'
import styled from 'styled-components'
import calligraphyMov from '../assets/images/creative-lab/calligraphy.gif'
import mustacheMov from '../assets/images/creative-lab/mustache.gif'
import calligraphy1 from '../assets/images/creative-lab/calligraphy1.jpg'
import calligraphy2 from '../assets/images/creative-lab/calligraphy2.jpg'
import calligraphy3 from '../assets/images/creative-lab/calligraphy3.png'
import calligraphy4 from '../assets/images/creative-lab/calligraphy4.png'
import calligraphy5 from '../assets/images/creative-lab/calligraphy5.png'
import calligraphy6 from '../assets/images/creative-lab/calligraphy6.png'
import calligraphy7 from '../assets/images/creative-lab/calligraphy7.png'
import calligraphy8 from '../assets/images/creative-lab/calligraphy8.png'
import hiddenGem from '../assets/images/creative-lab/hidden-gem.jpg'
import hakuna from '../assets/images/musgho/hakuna.jpg'
import clouds from '../assets/images/musgho/clouds.jpg'
import hustle from '../assets/images/musgho/hustle.jpg'


const MosqueGrid = styled.div`
  display: grid;
  max-width: 1800px;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 0;
  height: 100%;
  grid-template-areas: 
    "a   a   e"
    "a   a   g"
    "b   c   h"
    "f   d   d"
    "i   i   j"
    "i   i   j"
    "k   l   m"
    "k   l   n";
`

const MosqueImg = styled.div`
  width: 100%;
  height: 100%;
  min-height:400px;
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;

`

const CreativeLabMosque = ({ ...rest }) => (
  <div>
    <MosqueGrid>
      <MosqueImg style={{ backgroundImage: `url(${calligraphyMov})`, gridArea: `a` }}></MosqueImg>
      <MosqueImg style={{ backgroundImage: `url(${calligraphy1})`, gridArea: `b` }}></MosqueImg>
      <MosqueImg style={{ backgroundImage: `url(${calligraphy2})`, gridArea: `c` }}></MosqueImg>
      <MosqueImg style={{ backgroundImage: `url(${mustacheMov})`, gridArea: `d` }}></MosqueImg>
      <MosqueImg style={{ backgroundImage: `url(${calligraphy3})`, gridArea: `e` }}></MosqueImg>
      <MosqueImg style={{ backgroundImage: `url(${calligraphy4})`, gridArea: `f` }}></MosqueImg>
      <MosqueImg style={{ backgroundImage: `url(${calligraphy5})`, gridArea: `g` }}></MosqueImg>
      <MosqueImg style={{ backgroundImage: `url(${calligraphy6})`, gridArea: `h` }}></MosqueImg>
      <MosqueImg style={{ backgroundImage: `url(${calligraphy7})`, gridArea: `i` }}></MosqueImg>
      <MosqueImg style={{ backgroundImage: `url(${calligraphy8})`, gridArea: `j` }}></MosqueImg>
      <MosqueImg style={{ backgroundImage: `url(${hiddenGem})`, gridArea: `k` }}></MosqueImg>
      <MosqueImg style={{ backgroundImage: `url(${hakuna})`, gridArea: `l` }}></MosqueImg>
      <MosqueImg style={{ backgroundImage: `url(${clouds})`, gridArea: `m` }}></MosqueImg>
      <MosqueImg style={{ backgroundImage: `url(${hustle})`, gridArea: `n` }}></MosqueImg>
    </MosqueGrid>
  </div>
);

export default CreativeLabMosque