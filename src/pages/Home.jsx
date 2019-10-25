import React from 'react'
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Service from '../components/Service.jsx'
import Footer from '../components/Footer';
import Facility from '../components/Facility';
import Galeries from '../components/Galleries';
import Advantage from '../components/Advantage';
import Recentlyitem from '../components/RecentlyItem';
export default function Home() {
	return (
		<>
			<Hero>
				<Banner
					title="Luxstay Room Vip "
					subtitle="This is room vip for everyone with $100 starting one day">
					<Link to="/rooms" className="btn-primary">
						our rooms
                    </Link>
				</Banner>
			</Hero>
			<Facility />
			<Galeries />
			<Recentlyitem />
			<Advantage />
			<Service />
			<Footer />
		</>
	)
}
