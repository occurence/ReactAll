export const Statistics = ({ good, neutral, bad, total }) => {
    return(
        <div>
            <p>
            {/* Good: <span>{this.state.good}</span> */}
            Good: <span>{good}</span>
            </p>
            <p>
            Neutral: <span>{neutral}</span>
            </p>
            <p>
            Bad: <span>{bad}</span>
            </p>
            <p>
            Total: <span>{total}</span>
            </p>
      </div>
    )
}