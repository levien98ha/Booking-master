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
import Customer from '../components/Customer'
import CountUpFooter from '../components/CountUpFooter'
export default function Home() {

	return (
		<>
			<Hero>
			    <Banner title="WELCOME TO NEO GROUP." >
                    <Link to="/room" className="btn-primary">
                                Get Started
                     </Link>
                </Banner>
			</Hero>		
			<Galeries />
			<Recentlyitem />
			<Facility />
			<Service />
			<Advantage />
			<Customer />
			<CountUpFooter />
			<Footer />
		</>
	)
}

// json-server --watch db.json