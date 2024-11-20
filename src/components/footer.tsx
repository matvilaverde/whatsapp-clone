import {
	MessageCircleCode,
	MessageSquareText,
	Phone,
	Users,
} from "lucide-react";

export const Footer = () => {
	const menuItems = [
		{ icon: <MessageSquareText />, text: "Conversas", link: "/" },
		{ icon: <MessageCircleCode />, text: "Atualizações", link: "/updates" },
		{ icon: <Users />, text: "Comunidades", link: "/communities" },
		{ icon: <Phone />, text: "Ligações", link: "/calls" },
	];

	return (
		<footer className="flex fixed bottom-4 gap w-full justify-around py-4">
			{menuItems.map((item, index) => (
				<a href={item.link} key={index} className="flex flex-col items-center">
					<div className="text-2x1">{item.icon}</div>
					<span className="text-sm">{item.text}</span>
				</a>
			))}
		</footer>
	);
};
