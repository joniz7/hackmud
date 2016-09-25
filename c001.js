function(context, args)
{
	var c=args.color,r="", t=args.target.call;
	if(!c) {
		for(var a of ["black", "white", "blue", "red", "yellow", "green", "pink", "purple", "grey", "orange", "cyan"]) {
			r+=a+": "+t({c001:a});
			if(r.includes('digit')) {
				c=a;
				break;
			}
		}
		#s.chats.tell({to:context.caller, msg:c});
	}

	for(var i=0; i<10; i++) {
		//#s.chats.tell({to:context.caller, msg:"c001:"+c+", color_digit:"+i});	
		r+="\n"+t({c001:c, color_digit:i});
	}

	return r;
}
