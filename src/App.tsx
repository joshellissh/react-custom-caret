import './App.css'
import {CarrotCaret, CarrotCaretString, CSSCaret, CSSCaretString} from "./examples.tsx";
import {Code, InlineCode} from "./Code.tsx";

function App() {

  return (
      <>
          <div style={{
              marginLeft: "auto",
              marginRight: "auto",
              width: "200px",
              marginTop: "50px",
              marginBottom: "50px"
          }}>
              <img src="/react-custom-caret-examples/rcc.svg" alt="react-custom-caret" />
          </div>
          <div style={{
              width: "50%",
              marginLeft: "auto",
              marginRight: "auto",
          }}>
              <h1>react-custom-caret Examples</h1>
              <p>These examples should cover most of the use cases of the component, but if in doubt: check the code!</p>
              <br/>
              <h3>SVG Caret</h3>
              {CarrotCaret()}
              <p>
                  The caret offset can be set by the {InlineCode("marginLeft")} and {InlineCode("marginTop")} properties.
                  The {InlineCode("left")} and {InlineCode("top")} properties are reserved to set the caret position, and
                  should not be used.
              </p>
              {Code(CarrotCaretString)}
              <br />
              <h3>CSS Caret</h3>
              {CSSCaret()}
              <p>
                  Here, a terminal style caret is created using just two divs and CSS. You can see we have a caret for both
                  the focus state and when focus is removed ({InlineCode("blurCaret")}). We also have the input styled
                  directly with the {InlineCode("style")} property and blink turned off.
              </p>
              {Code(CSSCaretString)}
          </div>
      </>
  )
}

export default App
