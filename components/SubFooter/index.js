import { Container, Grid, Box, Typography, Link, TextField, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import logo from "../../assets/images/logo/white_on_black.png";
import facebook from "../../assets/images/Facebook.svg";
import twitter from "../../assets/images/Twitter.svg";
import instagram from "../../assets/images/Instagram.svg";
import footerVector from "../../assets/images/footerVector.svg";


const useStyles = makeStyles(theme => ({
	footer: {
		borderTop: `1px solid ${theme.palette.divider}`,
		marginTop: theme.spacing(8),
		paddingTop: theme.spacing(3),
		paddingBottom: theme.spacing(3),
		[theme.breakpoints.up("sm")]: {
			paddingTop: theme.spacing(5),
			paddingBottom: theme.spacing(5)
		},
		backgroundColor: theme.palette.primary.main,
		backgroundImage: `url(${footerVector})`,
		backgroundRepeat: 'no-repeat',
		flexGrow: 1
	},
	title: {
		fontWeight: 'bold',
		fontSize: 36
	},
	text: {
		marginTop: 15,
		lineHeight: 1.67
	},
	informed: {
		display: 'flex',
		alignItems: 'center'
	},
	textField:  {
		backgroundColor: 'white',
		width: 400,
		marginRight: 2
	},
	button:{
		backgroundColor: 'black',
		color:  'white'
	}
}));

const desc1 = [
	"The situation",
	"The Idea",
	"The Buzz",
	"Be part of the  Solution"
];

const desc2 = [
	"About",
	"Culture",
	"The Colony",
	"Join the Hive"
];

function SubscribeFooter() {
	const classes = useStyles();
	return (
		<Container maxWidth="false" className={classes.footer}>
			<Container className={classes.informed}>
				<Container>
					<Typography className={classes.title}>
						Bee informed
					</Typography>
					<Typography className={classes.text}>
						Are you interested in getting the latest news and updates about bees, beekeeping, pollination, and more?
					</Typography>
				</Container>
				<Container style={{ display: 'flex' }}>
					<TextField id="outlined-search" label="Email" type="search" variant="outlined" className={classes.textField} />
					<Button variant="contained" className={classes.button}>Subscribe</Button>
				</Container>
			</Container>
		</Container>
	);
}

export default SubscribeFooter;
