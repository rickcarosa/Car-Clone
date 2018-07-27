import React, { Component } from 'react' 
import glamorous from 'glamorous'

class BaseSpecs extends Componpent {
    render() {
        return(
            <div>
                Base Specs
            </div>
        ) 
    }
}

export default BaseSpecs

const Nav = glamorous.div({
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    height: '3.5rem',
    width: '5rem'
    ,':before': {
        content: `''`,
        height: '100%',
        width: '100%',
        backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zd…QtMS41IDIuNi0yLjZIODVjLjMgMS4yIDEuMyAyLjQgMi43IDIuNiIvPiAgPC9nPjwvc3ZnPg==)',
        backgroundSize: '100px 13px',
        zIndex: '500',
        position: 'absolute'
    }
 
 })