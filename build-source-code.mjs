cd ${{ steps.env.outputs.USER_WORK_SPACE_PATH }}
#modify maven package version
mvn versions:set -DnewVersion=${{ github.event.inputs.JAR_VERSION }} -s settings.xml
#maven package
mvn clean package -U -s settings.xml
