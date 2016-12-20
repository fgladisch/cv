#!/bin/bash

rsync -av --delete --exclude=".*" build/* murky@felixgladisch.de:~/html/cv
