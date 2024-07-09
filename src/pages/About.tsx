import './About.css'

import { useAppSelector, useAppDispatch } from '../hooks'
import { useEffect } from 'react'
import { membersActions } from '../store/members'
import { fetchMembers } from '../services/MemberService'

import NProgress from 'nprogress'

function About() {
	NProgress.start()

	const members = useAppSelector((state) => state.members.members)
	const dispatch = useAppDispatch()

    /* c8 ignore start */
	// useEffect hook is called after React updates the DOM
	useEffect(() => {
		fetchMembers()
			.then((data) => {
				dispatch(membersActions.setMembers(data))
			})
			.then(() => {
				NProgress.done()
			})
	}, [dispatch])
    /* c8 ignore stop */

	return (
		<div data-testid='about' className='about'>
			<h1 data-testid='about-header-1'>U P P E R C A S E</h1>
			<hr />
			<h2 data-testid='about-header-2'>Band Members</h2>
			{members &&
				members.map((member) => (
					<p
						data-testid='member-item'
						className='member-item'
						key={member.name}
					>
						<span>
							{member.name} - {member.role}
						</span>
					</p>
				))}
			<hr />
			<p data-testid='band-pic' className='band-pic'>
				<img alt='uppercase2019-bandPic.png' src='/uppercase2019-bandPic.png' />
			</p>
			<div data-testid='biography' className='biography'>
				<p>
					In 2013 the band released their debut album entitled &quot;
					<i>Time Space Warp</i>&quot;, and their first single &quot;
					<i>Balikbayan</i>&quot; caught the attention of Filipino online radio
					stations in the UK, Dubai, Manila and Toronto. They were unanimously
					voted &quot;<b>Top Band</b>&quot; at the 2013 Filipinos Making Waves
					Festival held at Dundas Square in downtown Toronto, winning over
					judges with their hit single &quot;<i>Ere</i>&quot;.
				</p>
				<p>
					In 2015 the whole band went back home to Manila and performed gigs
					around the city to promote their music. They released a sophomore EP
					album entitled &quot;<i>Bukas Makalawa</i>&quot; consisting of five
					new tracks, including the single &quot;<i>Tuldok</i>&quot; released in
					2016. They also released a Christmas single entitled &quot;
					<i>Babalik</i>&quot; on December 2, 2017 as a salute to all Overseas
					Filipino Workers and Filipino migrants around the world.
				</p>
				<p>
					The band released its newest singles &quot;<i>Tanging Ikaw</i>&quot; on
					February 9, 2019, and &quot;<i>Ligaw Na Tadhana</i>&quot; on March 23, 2023 
					which were featured on Spotify&apos;s New Music	Friday Philippines playlist on its debut week, 
					and have enjoyed popularity and heavy streaming from listeners in the Philippines.
				</p>
			</div>
		</div>
	)
}

export default About
