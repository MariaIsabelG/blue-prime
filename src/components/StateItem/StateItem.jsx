function StateItem ({state}) {

    console.log('These are states', state);

    return (
        <div>
            <label>
                <input type="checkbox" value={state.id}/>
                {state.name}
            </label>
        </div>
    )
};

export default StateItem;