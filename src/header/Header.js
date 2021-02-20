import {useState} from 'react'

export default ({sendUserName, socketVar, flagSetter}) => {
    const [name, setname] = useState("");
    const [flag, setFlag] = useState(0);

    function localName(e) {
        setname(e.target.value)
    }

    function handelClick() {
        if (name === '') {
        } else {

            socketVar.emit('username',
                {
                    id: socketVar.id,
                    name: name
                }
            );
            setFlag(1)
            flagSetter(1)
        }

    }

    return (

        <header className="header">
            <div className="heading">Live Code Share</div>
            <div className="input-name">
                {
                    flag === 0 ?
                        <>
                            <input type="text" placeholder="Enter Name" onChange={localName} value={name}/>
                            <button
                                onClick={handelClick}
                                style={{color: "black", fontSize: "18px"}}>
                                Get IN..!
                            </button>
                        </>
                        :
                        <p>{name}</p>
                }

            </div>
        </header>
    );
};
