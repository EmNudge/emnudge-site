import React from "react"
import "./index.scss"

const MobileViews = ({ rows, isGame, isAnimation, isNarration }) => {
  const getRows = rows => {
    if (isGame) {
      return rows.map(({ character, company, title }) => {
        return { title, role: character, dev: company }
      })
    }
    if (isAnimation) {
      return rows.map(({ animator, character, title }) => {
        return { title, role: character, dev: animator }
      })
    }
    if (isNarration) {
      return rows.map(({ company, title }) => {
        return { title, dev: company }
      })
    }
    return []
  }

  return (
    <div className="mobile-views">
      {getRows(rows).map(({ title, dev, role }) => (
        <div key={Math.random()} className="mobile-banner">
          <h1>{title}</h1>
          <span>{role}</span>
          <span>{dev}</span>
        </div>
      ))}
    </div>
  )
}

export default MobileViews
