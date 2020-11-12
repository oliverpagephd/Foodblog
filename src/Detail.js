import React, { useState, useEffect } from "react";
import { Switch, Route, Link, useParams } from "react-router-dom";


export default function Detail({ data }) {
    const { id } = useParams();
    return (
      <>
        {data
          .filter((e) => e.sys.id === id)
          .map((e) => (
            <>
              <h1>{e.fields.title}</h1>
              <ul>
                {e.fields.ingredients.content[0].content.map((ingredient) => {
                  return <li>{ingredient.content[0].content[0].value}</li>;
                })}
              </ul>
            </>
          ))}
      </>
    );
  }
  