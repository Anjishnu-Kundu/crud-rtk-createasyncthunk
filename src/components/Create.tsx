import React, {useState} from 'react'

type Props = {}

const Create: React.FC = (props: Props) => {
    const [users, setUsers] = useState({})

    setUsers(...users, [e.target.name]: e.target.value)

    return (
        <div>
            <form className='w-50 mx-auto'>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                {/* <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label">Check me out</label>
                </div> */}
                <div className="form-check">
                    <input type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
                        <label className="form-check-label">
                            Male
                        </label>
                </div>
                <div className="form-check">
                    <input type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                        <label className="form-check-label">
                            Female
                        </label>
                </div>
                <button type="submit" className="btn btn-primary mt-2">Submit</button>
            </form>
        </div>
    )
}

export default Create