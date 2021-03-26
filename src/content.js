function Part(props) {
    return <p>{props.part} {props.exercises}</p>
}

function Content(props) {
    return(
        <div>
            <Part part={props.part1} exercises={props.exercises1}/>
            <Part part={props.part2} exercises={props.exercises2}/>
            <Part part={props.part3} exercises={props.exercises3}/>
        </div>
    );
}

export default Content;