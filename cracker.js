function(context, args)
{
	// black white blue red yellow green pink purple gray grey cyan indigo orange 
	var t = args.target.call, l = args.lock, s="LOCK_UNLOCKED",c,r="";
	
	if(l === 'ez_21' || l === 'ez_35') {
		var r = "";
		r += t({[l]:"open"});
		r += "\n"+t({[l]:"release"});
		r += "\n"+t({[l]:"unlock"});
		for (var a of ['open', 'release', 'unlock']) {
			r += t({[l]:a});
			if(r.includes('digit')) {
				c=a;
			}
		}
	}

	if(l === 'ez_35') {
		for(var i=0; i<10; i++) {
			r+=t({[l]:c, digit:i});
		}
	}

	if(l === 'c001') {
		for(var a of ["black", "white", "blue", "red", "yellow", "green", "pink", "purple", "grey", "orange", "cyan"]) {
			r+=a+": "+t({[l]:a});
			if(r.includes('digit')) {
				c=a;
				break;
			}
		}
		for(var i=0; i<10; i++) {
			r+=t({[l]:c, color_digit:i});
		}
	}

	return r;
}
