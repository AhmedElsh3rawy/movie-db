function Login() {
	return (
		<form className="flex flex-col gap-3">
			<div className="flex flex-col px-5 gap-2">
				<label for="email">Email</label>
				<input
					className="border border-gray-400 focus:border-sky-600 py-2 px-1 rounded"
					type="text"
					name="email"
					placeholder="Email"
				/>
			</div>

			<div className="flex flex-col px-5 gap-2">
				<label for="password">Password</label>
				<input
					className="border border-gray-400 focus:border-sky-600 py-2 px-1 rounded"
					type="password"
					name="password"
					placeholder="Password"
				/>
			</div>

			<div className="px-5">
				<button
					className="bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded cursor-pointer"
					type="submit"
				>
					Login
				</button>
			</div>
		</form>
	);
}

export default Login;
