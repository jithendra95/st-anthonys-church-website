import React from "react";
import Layout from "../components/layout";

export default class IndexPage extends React.Component {
  render() {
    return <Layout>
        <div className="container-wrap">
		<aside id="fh5co-hero">
			<div className="flexslider">
				<ul className="slides">
			   	<li style={{backgroundImage: "url('static/assets/template/images/img_bg_1.jpg')"}}>
			   		<div className="overlay"></div>
			   		<div className="container-fluid">
			   			<div className="row">
				   			<div className="col-md-6 col-md-offset-3 text-center">
				   				<div className="slider-text">
					   				<div className="slider-text-inner">
					   					<h1>“Come, follow me,” Jesus said, “and I will send you out to fish for people.” At once they left their nets and followed him.</h1>
											<h2>Matthew 4:19-20</h2>
											<p> <a className="btn btn-primary btn-learn" >All Mass Times <i className="icon-arrow-right3"></i></a></p>
					   				</div>
				   				</div>
				   			</div>
				   		</div>
			   		</div>
			   	</li>
			   	<li style={{backgroundImage: "url('static/assets/template/images/img_bg_2.jpg')"}}>
			   		<div className="overlay"></div>
			   		<div className="container-fluid">
			   			<div className="row">
				   			<div className="col-md-6 col-md-offset-3 text-center">
				   				<div className="slider-text">
					   				<div className="slider-text-inner">
									   <h1>“Come, follow me,” Jesus said, “and I will send you out to fish for people.” At once they left their nets and followed him.</h1>
											<h2>Matthew 4:19-20</h2>
											<p> <a className="btn btn-primary btn-learn" >All Mass Times <i className="icon-arrow-right3"></i></a></p>
					   				</div>
					   			</div>
				   			</div>
				   		</div>
			   		</div>
			   	</li>
			   	<li style={{backgroundImage: "url('static/assets/template/images/img_bg_3.jpg')"}}>
			   		<div className="overlay"></div>
			   		<div className="container-fluids">
			   			<div className="row">
				   			<div className="col-md-6 col-md-offset-3 text-center">
				   				<div className="slider-text">
					   				<div className="slider-text-inner text-center">
									   <h1>“Come, follow me,” Jesus said, “and I will send you out to fish for people.” At once they left their nets and followed him.</h1>
											<h2>Matthew 4:19-20</h2>
											<p> <a className="btn btn-primary btn-learn" >All Mass Times <i className="icon-arrow-right3"></i></a></p>
					   				</div>
					   			</div>
				   			</div>
				   		</div>
			   		</div>
			   	</li>
			  	</ul>
		  	</div>
		</aside>

		<div id="fh5co-intro">
			<div className="row animate-box">
				<div className="col-md-12 col-md-offset-0 text-center">
					<h2>Living in God's Amazing Grace!</h2>
					<span>We are open Sunday & Tuesday</span>
				</div>
			</div>
		</div>

		<hr/>

	</div>
    </Layout>;
  }
}
