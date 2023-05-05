#include <ctype.h>
#include <stdio.h>

typedef struct
{
	size_t space;
	size_t alnum;
	size_t punct;
}

chartypes classify (FILE *f)
{
	chartypes types = { 0, 0, 0, };
	int ch;

	while ((ch = fgetc(f)) != EOF)
	{
		types.space += !!isspace(ch);
		types.alnum += !!isalnum(ch);
		types.punct += !!ispunct(ch);
	}

	return types;
}
