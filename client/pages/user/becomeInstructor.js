import { useContext, useState, useEffect } from 'react';
import { Context } from '../../context';
import { Button } from 'antd';
import axios from 'axios'
import { SettingOutlined, UserSwitchOutlined, LoadingOutlined } from '@ant-design/icons';
import { toast } from 'react-toastify';

// import { useState, useContext, useEffect } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { Context } from '../context';
import { useRouter } from 'next/router';
const BecomeInstructor = () => {
	//state
	// const [name, setName] = useState("");
	const [Account, setAccount] = useState("");
	const [Ifsccode, setIfsccode] = useState("");
	const [loading, setLoading] = useState(false);

	const { state: { user }, } = useContext(Context);

	const router = useRouter();

	useEffect(() => {
		if (user && user.role.includes("Instructor")) router.push("/");
	}, [user]);
	// console.log("BecomeInstructor");
	// const becomeInstructor = () => {
	const becomeInstructor = async (e) => {
		console.log("abcd")
		console.log(user)
		e.preventDefault();
		try {
			// setLoading(true);
			await axios.post(`/api/make-instructor`, {
				Account: Account,
				Ifsccode: Ifsccode,
				user: user
			}).then(data => {
				console.log(data)
				localStorage.setItem("user", JSON.stringify(data.data));
				// router.push("/instructor/course/create");
				window.location.href ="/instructor/course/create";
			}).catch(error => {
				console.log(err.response.status);
				toast(" failed as form is not completed.");
				setLoading(false);
				console.log(error);
			});
		} catch (err) {
			toast(" failed as form is not completed.");
			setLoading(false);
		};

	};
	return (
		<>
			<h1 className="jumbotron text-center square">Become Instructor</h1>
			<div className="container">
				<div className="row">
					<div className="col-md-6 offset-md-3 text-center">
						<div className="pt-4">
							<UserSwitchOutlined className="display-1 pb-3" />
							<br />
							<h2>Setup payout to publish courses </h2>
							<p className="lead text-warning">Share your bank account details to recieve desire earnings for ur respective courses</p>
							<input type="text"
								className="form-control mb-4 p-4"
								value={Account}
								onChange={(e) => setAccount(e.target.value)}
								placeholder="Enter Account No."
								required />
							<input type="text"
								className="form-control mb-4 p-4"
								value={Ifsccode}
								onChange={(e) => setIfsccode(e.target.value)}
								placeholder="Enter Ifsccode"
								required />
							<div className="d-grid gap-2">
								<Button
									className="mb-3"
									type="primary"
									block
									shape="round"
									icon={loading ? <LoadingOutlined /> : <SettingOutlined />}
									size="small"
									disabled={!user || loading}
									onClick={becomeInstructor}
								>
									{loading ? "Processing..." : " SUBMIT"}
								</Button>
							</div>

							<p className="lead">you will be provided create course acess soon</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default BecomeInstructor;