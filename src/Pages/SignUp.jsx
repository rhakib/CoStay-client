import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import SocialLogin from '../Components/SocialLogin';
import useAuth from '../Hooks/useAuth';


const SignUp = () => {

    const { createUser, updateUserProfile } = useAuth()
    const navigate = useNavigate()
    const handleRegister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)

        const name = form.get('name');
        const img = form.get('image');
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, name, img, password);

        if (password.length < 6) {
            toast.error('Password length should be at least 6 character')
            return;
        }
        else if (!/^(?=.*[A-Z])(?=.*[^a-zA-Z\d])/.test(password)) {
            toast.error('please incldue an uppercase and a special character')
            return;
        }


        createUser(email, password, img)
            .then(res => {
                const user = res.user;
                console.log(user);
                toast.success('Successfuly registered')

                updateUserProfile(img, name)
                    .then(res => {
                        toast.success('Successfuly registered')
                        navigate('/')
                        location.reload(true)
                    })

            })
            .catch(err => {
                toast.error(err.message)
            })


    }

    return (
        <div className="hero pb-12 bg-purple-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl text-black font-bold">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-[350px] md:w-[400px]  shadow-2xl mt-6 glass  bg-gray-400">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black font-semibold text-xl">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your name" className="input input-bordered " />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black font-semibold text-xl">Image</span>
                            </label>
                            <input type="text" name='image' placeholder="Image URL" className="input  input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black font-semibold text-xl">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Email" className="input   input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black font-semibold text-xl">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Password" className="input  input-bordered" required/>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn text-white text-lg hover:bg-gray-700 bg-gray-500 border-none ">Register</button>
                        </div>
                    <p className='ml-14 md:ml-12 text-black my-2'>Already have an account? <Link to='/login' className='text-purple-600 hover: text-lg font-semibold '>Login</Link></p>
                    </form>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default SignUp;