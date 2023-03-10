git clone git@github.com:alexeysot/ozon_to_google_sheets.git

cd ozon_to_google_sheets

git checkout ya_funcs

rm -rf .git

zip -r ozon-to-gs.zip *

mv ozon-to-gs.zip ~/datasoup/backend-temp/files

cd ..

rm -r ozon_to_google_sheets

