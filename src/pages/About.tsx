import cvFile from "../assets/CV_Trang_Pham_2025.pdf"

export default function About() {
	return (
		<div className="page">

			<section className="section">
				<h1>Hi! I'm Trang</h1>
				<p className="subtitle">Learn more about me</p>
				<p>
					I'm currently transitioning from a finance career to software development at Hive Coding School, Helsinki. <br/>

					I hold a Master degree in Finance and worked 5 years as a financial controller.<br/>

					I'm experienced in financial data analysis, reports building and automating workflows to reduce errors and increase efficiency.<br/>

				</p	>
			</section>

			<section className="CV">
				<h3>Download my CV</h3>
				<ul>
					<a
						href={cvFile}
						download="TrangPham_CV.pdf"
						className="cv-button"
					>
						Download (PDF)
					</a>
				</ul>
			</section>
			
			<section className="section">
				<h1>Experience</h1>
				<ul>
					<li> Built individual and team projects in C, C++, Makefile. </li>
					<li> Worked frequently with Git and UNIX environment. </li>
					<li> Experienced with Docker, virtual machine </li>
					<li> Self-learned Python, Tableau, PowerBi. </li>
				</ul>
			</section>

			<section className="section">
				<h1>Soft skills</h1>
				<ul className="tag-list">
					<li> Teamwork skill in school projects and in Finnish company</li>
					<li> Time management </li>
					<li> Adapt learning </li>
					<li> Clear communication </li>
				</ul>
			</section>

			<section className="section">
				<h1>Likes 🥰</h1>
				<ul className="tag-list">
					<li>Swimming</li>
					<li>Yoga</li>
					<li>Crocheting</li>
					<li>Reading</li>
				</ul>
			</section>

			<section className="section">
				<h1>Dislikes 😣</h1>
				<ul className="tag-list">
					<li>Ads</li>
					<li>Darkness</li>
					<li>Needles</li>
				</ul>
			</section>
			
		</div>
	)
}