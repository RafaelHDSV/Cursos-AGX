function Header(props) {
	return (
		<header>
			<img src={props.profileImg} />
			<h1>{props.username}</h1>
		</header>
	);
}

export default Header;
