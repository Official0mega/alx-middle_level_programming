/*
 * File_name: chain.c
 * Created: 16th of April, 2023
 * Auth: David James Taiye
 * Size: undefined
 * Project: ALX-SE_Simple-Shell
 * Status: submitted.
 */

#include "shell.h"

/**
 * is_chain - a function that tests current char in buffer is a chain delimeter
 * @info: parameter struct
 * @buf: char buffer
 * @p: address of current position in buf
 *
 * Return: 1 if chain delimeter, otherwise 0.
 */
int is_chain(info_t *info, char *buf, size_t *p)
{
	size_t q = *p;
	
	if (buf[q] == '|' && buf[q + 1] == '|')
	{
		buf[q] = 0;
