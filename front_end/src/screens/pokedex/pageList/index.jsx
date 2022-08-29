import { createContext, memo} from "react";
import PageButton from "./pagebutton";
import styles from './index.module.css';
const ContextFunction = createContext();

function PageList({init,last}) {
  const IndexPage = [];
  for (let index = init; index < last+1; index++) {
    if(Math.sign(index)===1){
      IndexPage.push(index);
    }
  }
  return(
    <ContextFunction.Provider value={{init,last}} >
      <div id={styles.pagesListPokedex}>
        {IndexPage.map((numberPage)=>{
          return (<PageButton key={numberPage} numberPage={numberPage}/>)
        })}
      </div>
    </ContextFunction.Provider>
  )
}

export default PageList;