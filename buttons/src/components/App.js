import Button from "./Button";

function App() {
    return ( 
        <div>
        <Button class='default' text = 'Default'/>
        <Button class='outline' text = 'Default'/>
        <Button class='text' text = 'Default'/>
        <Button class='disableShadow' text = 'Default'/>
        <Button class='default disabled-default' text = 'Default'/>
        <Button class='text disabled-text' text = 'Default'/>
        <Button class='startIcon' text = 'Default'/>
        <Button class='endIcon' text = 'Default'/>
        <Button class='size-sm' text = 'Default'/>
        <Button class='size-md' text = 'Default'/>
        <Button class='size-lg' text = 'Default'/>
        <Button class='primary' text = 'Default'/>
        <Button class='secondary' text = 'Secondary'/>
        <Button class='danger' text = 'Danger'/>
        <p>created by <a className='navigate' href="https://devchallenges.io/portfolio/Hariraj1029" >Hariraj</a>- devChallenges.io</p>
        </div>
     );
}

export default App;