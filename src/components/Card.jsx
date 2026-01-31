import React from 'react'

const Card = (props) => {
  return (
    <div>
        <a href={props.element.url} target="_blank" download="true" rel="noreferrer">
        <div className="w-70 h-70 py-4 flex flex-col items-center" key={props.index}>
          <img
            key={props.index}
            src={props.element.download_url}
            alt={props.element.author}
            className="w-full h-full object-cover rounded-2xl mb-4 shadow-lg flex flex-row place-items-center"
          />
          <p className="text-center text-lg mb-8">Photo by: {props.element.author}</p>
        </div>
      </a>
    </div>
  )
}

export default Card