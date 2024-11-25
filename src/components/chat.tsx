import Image from "next/image";
import { PinIcon } from "lucide-react";

interface ContactProps {
	name?: string;
}
interface MessageProps {
	lastMessage: string;
}

interface PinProps {
	showPin?: boolean;
}
interface TimeProps {
	lastMessageTime?: string;
}

function Avatar({ className }: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<Image
			className={className}
			src="images/avatar.svg"
			alt="avatar icon"
			width="50"
			height="50"
		/>
	);
}

function ContactInfo({ name }: ContactProps) {
	return (
		<p>
			<b>{name}</b>
		</p>
	);
}

function Messages({ lastMessage }: MessageProps) {
	return <span>{lastMessage}</span>;
}

function Time({ lastMessageTime }: TimeProps) {
	return <span>{lastMessageTime}</span>;
}

function Pin({ showPin }: PinProps) {
	if (!showPin) return null;

	return (
		<p>
			<PinIcon />
		</p>
	);
}

export default function Chat() {
	return (
		<>
			<div className="flex inline-flex m-4 mb-2 h-16 w-screen">
				<Avatar className="flex align-middle" />
				<div>
					<div className="inline-flex align-middle justify-between w-full ml-2">
						<ContactInfo name="Karl Urban" />
						<Time lastMessageTime="08:03AM" />
					</div>
					<div className="inline-flex align-middle justify-between w-full ml-2">
						<Messages lastMessage="Oi Hughie" />
						<Pin showPin={true} />
					</div>
				</div>
			</div>

			<div className="flex inline-flex m-4 mb-2 h-16 w-screen">
				<Avatar className="flex align-middle" />
				<div>
					<div className="inline-flex align-middle justify-between w-full ml-2">
						<ContactInfo name="Robert Downey Jr" />
						<Time lastMessageTime="Yesterday" />
					</div>
					<div className="inline-flex align-middle justify-between w-full ml-2">
						<Messages lastMessage="Explosions? I'm not from Borderlands" />
						<Pin showPin={true} />
					</div>
				</div>
			</div>
		</>
	);
}
