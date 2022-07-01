import React, {useState} from 'react'
import './QnA.css'

const QnA = ({n, q}) => {
  const [showAnswer, setShowAnser] = useState(false);
  const [border, setBorder] = useState("");
    
  function toggleAnswer() {
    setShowAnser(!showAnswer);
    toggleBorder();
  }
  
  function toggleBorder() {
    setBorder(border === "" ? "border-blue": "")
  }
    return (
        <React.Fragment>
          <div id="qna" className={border}>
            <h3>
              {n}. {q.question}
              <span className="drop-down" onClick={toggleAnswer}>
                {showAnswer ? 
                <i 
                  className="fas fa-angle-down"
                /> :
                <i 
                  className="fas fa-angle-right "
                />
                }
              </span>
            </h3>
            {showAnswer && <p>
                {q.answer}
              </p>
            }
          </div>
        </React.Fragment>
    )
}

export default QnA;