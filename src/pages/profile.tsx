import Footer from "../components/footer";
const Profile = () => {
	return (
		<div>
			<h1>My Profile</h1>
			<img src="/images/profile.jpg" alt="Profile" />
			<p>
				現在、プログラミングを勉強しています。 主に JavaScript / React / Java
				を学習中で、なかでも React の開発がとても楽しいと感じています。
				このサイトも学習の一環として、自分で作成しました。 現在は React Native
				を使ってモバイルアプリを開発しており、来年度までにストア公開を目指しています。
				このブログでは、日々の学習メモやアプリ制作の過程などをゆるく発信していきたいと思います。
				将来的には、Zenn
				などのプラットフォームでも記事を投稿したいと思っています。
			</p>

			<h2>経歴</h2>
			<ul>
				<li>2024年4月 - 現在: プログラミングを勉強中</li>
				<li>2023年 -大学中退</li>
				<li>2020年 - 慶應大学中退</li>
			</ul>
			<p>
				最後まで見てくださってありがとうございます。
				これからも学び続け、少しずつ形にしていけたらと思います。
			</p>
			<Footer />
		</div>
	);
};

export default Profile;
