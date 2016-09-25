function(context, args)
{
	var s="";
	for(var i=0; i<10; i++) {
		s = s + args.target.call({});
	}

	return s;
}
