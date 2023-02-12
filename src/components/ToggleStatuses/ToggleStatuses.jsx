import './toggleStatuses.scss';

function ToggleStatuses({handleAllDone, tasks}) {
    return (
        <i
            className={tasks.every((task) => task.status === true) ? 'toggleStatuses done': 'toggleStatuses'}
            onClick={handleAllDone}
        ></i>
    );
}

export default ToggleStatuses;