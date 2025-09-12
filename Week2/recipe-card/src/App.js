import './components/RecipeCard.css'
//this is how we imort img file data as a js varible
//taking data and assign it to jsx?
//export and import only apply to js file as they were modules
import RECIPE_IMG from './assets/pancake.png'
import {RECIPE} from './components/recipe-data'


//react components - first letter captalized

// Old style
// function App() {
//     return <div>App</div>
// }

//New Style
// const App = () => {
//     return(
//         <>
//         <div>
//             <span>HELLO</span>
//              App
//         </div>
//         </>
//     )
// }

const App = () => {
  return (
    <div className='card'>
        <img src={RECIPE_IMG} alt='yummy pancake'/>

        <h2>{RECIPE.title}</h2>
        <p>{RECIPE.description}</p>
        <h3>Ingredients</h3>
        <ul>
            {RECIPE.ingredients.map((item, index)=>{return (<li key={index}>{item}</li>)})}
        </ul>
        <h3>Instructions</h3>
        {/* <ul>
            {RECIPE.instructions.map((item,index) => {
                return <li key={index}> {item}</li>
            })}
        </ul> */}

        {/* ordered list & unordered list */}
        
        <ol>
            {RECIPE.instructions.map((item,index) => (
                <li key={index}>{item}</li>
                ))}
        </ol>
    </div>
  )
}


export default App
