import { useForm } from "react-hook-form";
import Footer from "../components/footer";
import type { ContactData } from "../type";

const Contact = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting, isSubmitSuccessful },
		reset,
	} = useForm<ContactData>({
		defaultValues: {
			name: "",
			email: "",
			message: "",
		},
	});

	const onSubmit = async (data: ContactData) => {
		try {
			console.log("contact payload", data);
			await new Promise((resolve) => setTimeout(resolve, 800));
			reset();
		} catch (error) {
			console.error(error);
		}
	};

	const emailPattern =
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	const snsHandlePattern = /^@[A-Za-z0-9_.]{1,30}$/;
	const urlPattern =
		/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/i;

	return (
		<div>
			<h1>Contact</h1>
			<p>
				こちらにご意見・ご質問・ご要望等ございましたらお気軽にご連絡ください。
			</p>
			{isSubmitSuccessful && (
				<p role="status" style={{ color: "green" }}>
					送信が完了しました。ありがとうございます！
				</p>
			)}

			<form
				className="contact-form"
				onSubmit={handleSubmit(onSubmit)}
				noValidate
			>
				<p>こちらから連絡する際に使用させていただきます</p>

				<label className="contact-field">
					<span>お名前 *</span>
					<input
						type="text"
						className="contact-input"
						placeholder="名前"
						aria-invalid={Boolean(errors.name)}
						{...register("name", { required: "お名前を入力してください。" })}
					/>
					{errors.name && (
						<span role="alert" className="contact-error">
							{errors.name.message}
						</span>
					)}
				</label>

				<label className="contact-field">
					<span>連絡先（メールまたはSNS） *</span>
					<input
						type="text"
						className="contact-input"
						placeholder="メールアドレス、@ユーザー名、またはSNSのURL"
						aria-invalid={Boolean(errors.email)}
						{...register("email", {
							required: "連絡先を入力してください。",
							validate: (value) =>
								emailPattern.test(value) ||
								snsHandlePattern.test(value) ||
								urlPattern.test(value) ||
								"メールアドレス、SNSアカウント（@ユーザー名）またはURLのいずれかで入力してください。",
						})}
					/>
					{errors.email && (
						<span role="alert" className="contact-error">
							{errors.email.message}
						</span>
					)}
				</label>

				<label className="contact-field">
					<span>メッセージ *</span>
					<textarea
						className="contact-textarea"
						rows={5}
						placeholder="お問い合わせ内容"
						aria-invalid={Boolean(errors.message)}
						{...register("message", {
							required: "メッセージを入力してください。",
							minLength: {
								value: 10,
								message: "10文字以上で入力してください。",
							},
						})}
					/>
					{errors.message && (
						<span role="alert" className="contact-error">
							{errors.message.message}
						</span>
					)}
				</label>

				<button type="submit" className="submit-button" disabled={isSubmitting}>
					{isSubmitting ? "送信中..." : "送信する"}
				</button>
			</form>

			<Footer />
		</div>
	);
};

export default Contact;
